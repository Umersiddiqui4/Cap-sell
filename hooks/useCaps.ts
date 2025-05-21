'use client';

import { useEffect, useState } from 'react';

export interface Cap {
  id: string;
  name: string;
  price: number;
  colors: {
    name: string;
    value: string;
  }[];
  material: string;
  images: string[];
  category: string;
  inStock: boolean;
}

export function useCaps() {
  const [caps, setCaps] = useState<Cap[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchCaps = async () => {
      try {
        const res = await fetch('https://cms-coral-beta.vercel.app/api/caps?depth=true');  // Adjust the API endpoint for caps
        const data = await res.json();
        setCaps(data.docs || []);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch caps');
      } finally {
        setLoading(false);
      }
    };

    fetchCaps();
  }, []);

  return { caps, loading, error };
}
export function useCapsId(Id:string) {
  const [product, setProduct] = useState<Cap[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchCaps = async () => {
      try {
        const res = await fetch(`https://cms-coral-beta.vercel.app/api/caps/${Id}`);  // Adjust the API endpoint for caps
        const data = await res.json();
        setProduct(data.docs || []);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch caps');
      } finally {
        setLoading(false);
      }
    };

    fetchCaps();
  }, []);

  return { product, loading, error };
}
