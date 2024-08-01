import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { useModal } from '@/providers/modal-provider'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

import React from 'react'

type Props = {
    title: string
    subheading: string
    children: React.ReactNode
    defaultOpen?: boolean
}

const CustomModal = ({ children, subheading, title, defaultOpen }: Props) => {
    const { isOpen, setClose } = useModal()
    const handleClose = () => setClose()
    const isDesktop = useMediaQuery('(min-width: 768px)')

    if (isDesktop) {
        return (
            <Dialog
                open={isOpen}
                onOpenChange={handleClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{subheading}</DialogDescription>
                    </DialogHeader>
                    {children}
                </DialogContent>
            </Dialog>
        )
    }
    return (
        <Drawer
            open={isOpen}
            onClose={handleClose}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className='text-center'>{title}</DrawerTitle>
                    <DrawerDescription className='text-center flex flex-col items-center gap-4 h-96 overflow-scroll'>
                        {subheading}
                        {children}
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className='flex flex-col gap-4 bg-background border-t-[1px] border-t-muted'>
                    <DrawerClose>
                        <Button
                            variant='ghost'
                            className='w-full'
                            onClick={handleClose}>
                            Close
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CustomModal
