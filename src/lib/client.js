import sanityClient from '@sanity/client';
import { useParams } from "react-router-dom";
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'x5s1heid',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  // token: import.meta.env.VITE_PUBLIC_SANITY_TOKEN
  token: 'skASbdH7pdHJ5yof9oeMdQGp0wUDJ1eTdBhXyDg8FF6ttd2GGV0jn9Ic65ujGTMHuck6q4heSWS7PiTun54oBIhme4E5NELe6SNr38y26sRdsefcJntuMtxNu049QzeeFwoltfQbaToyXJUgDVTn5xWxCOawYDXymWoaTFXKv6cxccOgnNnK'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);