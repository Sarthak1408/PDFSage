"use client"

import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { trpc } from '@/app/_trpc/client'

const UpgradeButton = () => {

    const {mutate: createStripeSession} = trpc.createStripeSession.useMutation({
        onSuccess: ({url}) => {
            window.location.href = url ?? "/dashboard/billing"
        }
    })

    return (
        <Button onClick={() => document.getElementById("pl").click()} className='w-full'>
            <a href="https://buy.stripe.com/test_4gw15sa49awzeC4146" target="_blank" rel="noreferrer" className="hidden" id="pl"></a>
            Upgrade now <ArrowRight className='h-5 w-5 ml-1.5' />
        </Button>
    )
}

export default UpgradeButton