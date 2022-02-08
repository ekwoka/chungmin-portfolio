import { Dialog } from '@headlessui/react';
import { useState } from 'preact/hooks';
import RespImage from '../../respImage';

export default function LightBox(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <RespImage {...props} onClick={() => setIsOpen(true)} />
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        class="fixed top-1/4">
        <Dialog.Overlay />
        <RespImage {...props} />
      </Dialog>
    </>
  );
}
