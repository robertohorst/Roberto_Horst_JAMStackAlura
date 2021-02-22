import React from 'react';
import Card from '../Card';
import { SectionTitle } from '../SectionTitle';

export default function WrapperProjetos(){
    return (
        <section>
            <SectionTitle>
                Meus projetos
            </SectionTitle>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </section>
    )
}