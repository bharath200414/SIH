import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const VoiceMic: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const handleListen = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      console.log('Transcript:', result);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    setIsListening(true);
    recognition.start();
  };

  return (
    <div>
      <Button variant={isListening ? 'danger' : 'success'} onClick={handleListen}>
        🎤 {isListening ? 'Listening...' : 'Start Voice'}
      </Button>
      {transcript && (
        <p className="mt-2">
          <strong>Heard:</strong> {transcript}
        </p>
      )}
    </div>
  );
};

export default VoiceMic;
