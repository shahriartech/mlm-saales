import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  console.log('Supabase URL:', config.public.supabaseUrl)
  console.log('Supabase Key:', config.public.supabaseKey ? 'Set' : 'Not Set')

  if (!config.public.supabaseUrl || !config.public.supabaseKey) {
    console.error('Supabase configuration is incomplete. Please check your .env file and nuxt.config.ts')
    console.error('supabaseUrl:', config.public.supabaseUrl)
    console.error('supabaseKey:', config.public.supabaseKey ? 'Set' : 'Not Set')
    throw new Error('Supabase configuration is incomplete')
  }

  const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey)

  return {
    provide: {
      supabase
    }
  }
})