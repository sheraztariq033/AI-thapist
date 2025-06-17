import React, { useState } from 'react';
import Button from '../components/common/UI/Button';
import Input from '../components/common/UI/Input';
import Card from '../components/common/UI/Card';
import Modal from '../components/common/UI/Modal';

const UITestPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">UI Component Test Page</h1>

      {/* Button Tests */}
      <Card title="Buttons">
        <div className="space-x-2 space-y-2">
          <Button variant="primary" onClick={() => alert('Primary clicked!')}>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </Card>

      {/* Input Tests */}
      <Card title="Inputs">
        <Input
          label="Test Input"
          placeholder="Enter something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          containerClassName="max-w-sm"
        />
        <Input
          label="Error Input"
          placeholder="Input with error"
          value="has error"
          error="This is an error message."
          containerClassName="mt-4 max-w-sm"
          readOnly
        />
      </Card>

      {/* Card Test (already used above, can add another example if needed) */}
      <Card title="Simple Card Title" footer={<p className="text-sm">Card footer content</p>}>
        <p>This is the main content of a simple card. We can put any React nodes here.</p>
      </Card>

      {/* Modal Test */}
      <Card title="Modal Test">
        <Button variant="primary" onClick={handleOpenModal}>Open Modal</Button>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Test Modal Title"
          footer={
            <>
              <Button variant="secondary" onClick={handleCloseModal} className="mr-2">Cancel</Button>
              <Button variant="primary" onClick={() => { alert('Confirmed!'); handleCloseModal(); }}>Confirm</Button>
            </>
          }
        >
          <p>This is the content of the modal. You can put any React nodes here, like forms or detailed information.</p>
          <Input label="Input inside modal" placeholder="Type here..." containerClassName="mt-4"/>
        </Modal>
      </Card>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold">Notes for Manual Testing:</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Verify all button variants, sizes, and disabled state.</li>
          <li>Test input field by typing and observe label and placeholder.</li>
          <li>Check error state styling on the second input.</li>
          <li>Confirm card styling with title, body, and footer.</li>
          <li>Test modal opening and closing (via button, overlay click, Esc key).</li>
          <li>Check modal title, body, and footer content.</li>
          <li>Ensure background scroll is disabled when modal is open.</li>
        </ul>
      </div>

    </div>
  );
};

export default UITestPage;
