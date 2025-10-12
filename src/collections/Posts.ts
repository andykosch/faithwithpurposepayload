// src/collections/Posts.ts
import { CollectionConfig } from 'payload';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: ({ req: { user } }) => {
      // DEBUGGING LINE
      console.log('Checking CREATE access for user:', user); 
      
      return !!user; // Or your specific logic
    },
    read: () => true,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
};

export default Posts;
