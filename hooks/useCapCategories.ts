'use client';
import { stringify } from 'qs-esm'

import { useEffect, useState } from 'react';

export interface MediaType {
  id: string;
  cloudinaryURL?: string;
  filename?: string;
}

export interface CapCategory {
  id: string;
  name: string;
  description?: string;
  image?: string | MediaType;
  imageUrl?: string;
}

export function useCapCategories() {
  const [categories, setCategories] = useState<CapCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  // const fetchMediaById = async (id: string): Promise<MediaType | null> => {
  //   try {
  //     const res = await fetch(`http://localhost:3000/api/media/${id}`);
  //     if (!res.ok) throw new Error('Failed to fetch media');
  //     return await res.json();
  //   } catch (error) {
  //     console.error('Failed to fetch media for image:', id);
  //     return null;
  //   }
  // };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/cap-category`);
        const data = await res.json();

        // const categoriesWithImages = await Promise.all(
        //   (data?.docs || []).map(async (cat: CapCategory) => {
        //     if (cat.image && typeof cat.image === 'string') {
        //       const imageData = await fetchMediaById(cat.image);
        //       return {
        //         ...cat,
        //         image: imageData,
        //         imageUrl: imageData?.cloudinaryURL || '', // ✅ Assign imageUrl
        //       };
        //     }
        //     return {
        //       ...cat,
        //       imageUrl: '',
        //     };
        //   })
        // );

        setCategories(data.docs); // ✅ Now all categories have imageUrl before render
        // setCategories(categoriesWithImages); // ✅ Now all categories have imageUrl before render
      } catch (err: any) {
        setError(err.message || 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
