import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default function SignInModal({ onClose }) {
  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://raynix.netlify.app/auth' // your site URL + /auth
      }
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-2xl font-bold mb-6">Sign in to Raynix</h2>
      <button
        onClick={signInWithGoogle}
        className="w-64 py-3 rounded-md bg-white text-black font-semibold flex items-center justify-center gap-2"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Continue with Google
      </button>
      <button onClick={onClose} className="mt-3 text-xs text-gray-300">
        Continue as guest
      </button>
    </div>
  )
}