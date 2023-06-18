import Box from '@/components/Box/Box';
import CustomButton from '@/components/CustomButton/CustomButton';
import React from 'react';

export default function Home() {
    const handleTestFunction = () => {
        console.log('test');
    };

    return (
        <div>
            <Box />
            <CustomButton buttonText="Teste" action={handleTestFunction} />
        </div>
    );
}
