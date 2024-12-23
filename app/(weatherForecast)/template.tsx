'use client';

import React from 'react';

import { Toaster } from 'sonner';

import Header from './_accessories/components/Header';

export default function WeatherForecastTemplate({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <div className="px-36">{children}</div>
            <Toaster />
        </>
    );
}
