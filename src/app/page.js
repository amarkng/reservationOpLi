import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/login'); // Mengarahkan user ke halaman login
  return null;
}
