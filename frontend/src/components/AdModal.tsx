import React from 'react';
import { Modal } from 'antd';

interface AdModalProps {
  onClose: () => void;
}

const AdModal: React.FC<AdModalProps> = ({ onClose }) => {
  return (
    <Modal
      title="Support Us"
      open={true}
      onOk={onClose}
      onCancel={onClose}
      okText="Continue"
      cancelText="Skip"
      width={600}
    >
      <div className="text-center p-4">
        <p className="mb-4">
          Please consider supporting us by watching this short ad. It helps us keep this service free!
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          {/* Ad content will be loaded here */}
          <p className="text-gray-500">Ad content loading...</p>
        </div>
      </div>
    </Modal>
  );
};

export default AdModal; 