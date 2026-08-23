interface LeadData {
    id: string;
    timestamp: number;
    url: string;
    payload: Record<string, string>;
}

const CACHE_KEY = 'supreme_pending_leads';

export const getPendingLeads = (): LeadData[] => {
    try {
        const data = localStorage.getItem(CACHE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

export const savePendingLead = (payload: FormData, formUrl: string) => {
    try {
        const leads = getPendingLeads();
        const data: Record<string, string> = {};
        payload.forEach((value, key) => {
            data[key] = value as string;
        });

        const newLead: LeadData = {
            id: Math.random().toString(36).substring(2, 9),
            timestamp: Date.now(),
            url: formUrl,
            payload: data
        };

        leads.push(newLead);
        localStorage.setItem(CACHE_KEY, JSON.stringify(leads));
        console.log("Lead cached for offline synchronization:", newLead.id);
    } catch (e) {
        console.error("Failed to cache lead offline:", e);
    }
};

export const removePendingLead = (id: string) => {
    try {
        const leads = getPendingLeads().filter(l => l.id !== id);
        localStorage.setItem(CACHE_KEY, JSON.stringify(leads));
    } catch (e) {
        console.error("Failed to remove cached lead:", e);
    }
};

export const syncPendingLeads = async () => {
    const leads = getPendingLeads();
    if (leads.length === 0) return;

    console.log(`Attempting to synchronize ${leads.length} pending lead(s)...`);
    for (const lead of leads) {
        try {
            const formData = new FormData();
            Object.entries(lead.payload).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const response = await fetch(lead.url, {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                console.log(`Lead ${lead.id} successfully synchronized.`);
                removePendingLead(lead.id);
            }
        } catch (err) {
            console.warn(`Synchronization attempt failed for lead ${lead.id}:`, err);
        }
    }
};
