import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
const Item = React.lazy(()=>import('./item'));

export default function ShowItem() {
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                Open modal
            </Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                   <React.Suspense fallback={<div>加载中...</div>}>
                       <Item/>
                   </React.Suspense>
            </Modal>
        </React.Fragment>
    );
}
