/* eslint-disable @typescript-eslint/no-explicit-any */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';

// Settings API
export const settingsApi = {
  getAll: async () => {
    const res = await fetch(`${API_BASE_URL}/settings`);
    return res.json();
  },

  getByCategory: async (category: string) => {
    const res = await fetch(`${API_BASE_URL}/settings/category/${category}`);
    return res.json();
  },

  create: async (setting: any) => {
    const res = await fetch(`${API_BASE_URL}/settings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(setting),
    });
    return res.json();
  },

  update: async (id: number, setting: any) => {
    const res = await fetch(`${API_BASE_URL}/settings/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(setting),
    });
    return res.json();
  },

  delete: async (id: number) => {
    const res = await fetch(`${API_BASE_URL}/settings/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  },

  bulkUpsert: async (settings: any[]) => {
    const res = await fetch(`${API_BASE_URL}/settings/bulk`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    return res.json();
  },
};

// Content API
export const contentApi = {
  getAll: async (locale?: string) => {
    const url = locale ? `${API_BASE_URL}/content?locale=${locale}` : `${API_BASE_URL}/content`;
    const res = await fetch(url);
    return res.json();
  },

  getBySection: async (section: string, locale: string = 'pt') => {
    const res = await fetch(`${API_BASE_URL}/content/section/${section}?locale=${locale}`);
    return res.json();
  },

  create: async (content: any) => {
    const res = await fetch(`${API_BASE_URL}/content`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    });
    return res.json();
  },

  update: async (id: number, content: any) => {
    const res = await fetch(`${API_BASE_URL}/content/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    });
    return res.json();
  },

  delete: async (id: number) => {
    const res = await fetch(`${API_BASE_URL}/content/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  },

  bulkUpsert: async (contents: any[]) => {
    const res = await fetch(`${API_BASE_URL}/content/bulk`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contents),
    });
    return res.json();
  },
};

// Showcase API
export const showcaseApi = {
  getAll: async (locale?: string) => {
    const url = locale ? `${API_BASE_URL}/showcases?locale=${locale}` : `${API_BASE_URL}/showcases`;
    const res = await fetch(url);
    return res.json();
  },

  getPublished: async (locale?: string) => {
    const url = locale ? `${API_BASE_URL}/showcases/published?locale=${locale}` : `${API_BASE_URL}/showcases/published`;
    const res = await fetch(url);
    return res.json();
  },

  getById: async (id: number) => {
    const res = await fetch(`${API_BASE_URL}/showcases/${id}`);
    return res.json();
  },

  getBySlug: async (slug: string) => {
    const res = await fetch(`${API_BASE_URL}/showcases/slug/${slug}`);
    return res.json();
  },

  create: async (showcase: any) => {
    const res = await fetch(`${API_BASE_URL}/showcases`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(showcase),
    });
    return res.json();
  },

  update: async (id: number, showcase: any) => {
    const res = await fetch(`${API_BASE_URL}/showcases/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(showcase),
    });
    return res.json();
  },

  delete: async (id: number) => {
    const res = await fetch(`${API_BASE_URL}/showcases/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  },

  addMetric: async (showcaseId: number, metric: any) => {
    const res = await fetch(`${API_BASE_URL}/showcases/${showcaseId}/metrics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric),
    });
    return res.json();
  },

  addImplementation: async (showcaseId: number, implementation: any) => {
    const res = await fetch(`${API_BASE_URL}/showcases/${showcaseId}/implementations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(implementation),
    });
    return res.json();
  },

  addChart: async (showcaseId: number, chart: any) => {
    const res = await fetch(`${API_BASE_URL}/showcases/${showcaseId}/charts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(chart),
    });
    return res.json();
  },
};

// Contact API
export const contactApi = {
  getAll: async () => {
    const res = await fetch(`${API_BASE_URL}/contacts`);
    return res.json();
  },

  getUnread: async () => {
    const res = await fetch(`${API_BASE_URL}/contacts/unread`);
    return res.json();
  },

  getById: async (id: number) => {
    const res = await fetch(`${API_BASE_URL}/contacts/${id}`);
    return res.json();
  },

  getByDateRange: async (start: string, end: string) => {
    const res = await fetch(`${API_BASE_URL}/contacts/range?start=${start}&end=${end}`);
    return res.json();
  },

  create: async (contact: any) => {
    const res = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    });
    return res.json();
  },

  markAsRead: async (id: number) => {
    const res = await fetch(`${API_BASE_URL}/contacts/${id}/read`, {
      method: 'PATCH',
    });
    return res.json();
  },

  delete: async (id: number) => {
    const res = await fetch(`${API_BASE_URL}/contacts/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  },
};
