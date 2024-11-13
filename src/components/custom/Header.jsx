import React from 'react'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <img src='/logo.svg' alt='logo' />
        <div>
            <Button>
                Sign in 
            </Button>
        </div>
    </div>
  )
}
