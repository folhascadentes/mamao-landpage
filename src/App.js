import './App.css';
import logo from './assets/papaya.png'
import imageModel from './assets/model.png'
import imageSigns from './assets/signs.svg'
import imageProtection from './assets/protection.png'
import React, { useState } from 'react';

function App() {
    const [fontSize, setFontSize] = useState(100);

    const handleIncreaseFontSize = () => {
        setFontSize(fontSize + 10);
    };

    const handleDecreaseFontSize = () => {
        setFontSize(fontSize - 10);
    };

    return (
        <div className="bg-gray-50 pb-20">
            <style>{`html {font-size: ${fontSize}%; }`}</style>
            <header>
                <nav className="container mx-auto px-6 py-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4"><img src={logo} alt="Papaya Logo" style={{ height: '80px' }} />
                            <p className="text-4xl" style={{ color: "#f09666" }}>Mamão</p>
                        </div>
                        <div className="flex space-x-6">
                            <button title="Ação de aumentar tamanho do texto" aria-describedby="Ação de aumentar tamanho do texto" className="hover:bg-gray-200 rounded-xl px-4 font-bold" onClick={handleIncreaseFontSize} style={{ fontSize: '24px' }}>A+</button>
                            <button title="Ação de aumentar diminuir do texto" aria-describedby="Ação de aumentar diminuir do texto" className="hover:bg-gray-200 rounded-xl px-4 font-bold" onClick={handleDecreaseFontSize} style={{ fontSize: '24px' }}>A-</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-8 rounded-xl text-2xl font-medium">Ajudar</button>
                        </div>
                    </div>
                </nav>
                <div className="container mx-auto px-6 pt-16">
                    <div className="flex flex-col md:flex-row space-x-10">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl md:text-6xl font-bold leading-3 text-gray-900 leading-tight"
                                style={{ lineHeight: 1 }}>De
                                uma mão
                                para superar barreiras de
                                comunicação</h1>
                            <p className="text-xl md:text-2xl text-gray-700 mt-4 md:w-2/3"> A Libras (Língua Brasileira de Sinais) é
                                a
                                segunda língua
                                oficial do
                                Brasil,
                                mas poucos a dominam.
                                Participe do projeto Mamão e faça a diferença na comunicação inclusiva!
                            </p>
                            <section className="pt-16 md:py-16 md:w-5/6">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Colabore na criação do primeiro
                                    tradutor
                                    Libras-Português</h2>
                                <p className="text-lg md:text-xl text-gray-700 mt-2">Estamos trabalhando para desenvolver o primeiro
                                    tradutor de
                                    Libras
                                    para
                                    português com inteligência artificial
                                    avançada. Contamos com sua ajuda para criar uma base de dados completa dos sinais de Libras,
                                    tornando a
                                    comunicação mais
                                    acessível e inclusiva. Faça parte dessa transformação na linguagem!</p>
                            </section>
                        </div>
                        <div><img src={imageSigns} style={{ height: "450px" }} alt="Signs Imgs" /></div>
                    </div>
                </div>
            </header>
            <main className="container flex flex-col mx-auto px-6">
                <div className="flex justify-center md:w-1/2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-8 rounded-xl text-2xl font-medium">Nos dê uma
                        mão</button>
                </div>
                <section className="flex flex-col md:flex-row py-16 md:pl-6 flex justify-end">
                    <div className="md:w-1/2 hidden md:block">
                        <div className="flex justify-center"><img src={imageModel} style={{ height: "325px" }} alt="Model Imgs" /></div>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Entenda como funciona</h2>
                        <p className="text-lg md:text-xl text-gray-700 mt-2">Para criar nosso tradutor Libras-Português, precisamos
                            unir
                            a
                            construção de
                            uma base de dados e o uso de
                            inteligência artificial. A base de dados funciona como um repositório amplo de sinais de Libras,
                            possibilitando o
                            aprendizado e compreensão da linguagem pela inteligência artificial. Com essa combinação, nosso
                            tradutor
                            identificará e
                            traduzirá sinais de Libras de forma precisa e ágil.</p>
                        <p className="text-lg md:text-xl text-gray-700 mt-2">A inteligência artificial emprega algoritmos de
                            aprendizado
                            de máquina
                            para
                            examinar a base de dados,
                            identificar
                            padrões e estabelecer relações entre sinais de Libras e o português. Quanto mais informações forem
                            coletadas e
                            disponibilizadas, mais eficientes e eficazes serão as traduções. Sua participação é fundamental para
                            aprimorar o
                            entendimento da inteligência artificial e garantir uma comunicação acessível e inclusiva para a
                            comunidade surda.</p>
                    </div>
                </section>
                <section className="pb-8 md:pr-6 flex">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Como você pode contribuir</h2>
                        <p className="text-lg md:text-xl text-gray-700 mt-2">Para apoiar essa causa, basta se cadastrar em nossa
                            plataforma e
                            seguir as instruções simples e rápidas. Em
                            apenas 3 minutos ou menos, você pode fazer a diferença e ajudar a tornar a comunicação entre pessoas
                            surdas e ouvintes
                            mais inclusiva e acessível. Vamos juntos construir um mundo melhor e mais conectado!
                        </p>
                    </div>
                </section>
                <section className="py-8 md:pr-6 flex flex-col space-y-6 md:space-y-0 md:flex-row">
                    <div className="md:w-1/2">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800">E os meus dados?</h2>
                        <p className="text-lg md:text-xl text-gray-700 mt-2">Fique tranquilo! Todos os dados coletados são
                            propriedade coletiva e poderão ser utilizados pela comunidade científica e outras organizações sem
                            fins comerciais. A base de dados é de código aberto, seguindo as normas da Lei Geral de Proteção de
                            Dados (LGPD), e garantimos que você pode solicitar a remoção da sua imagem da base de dados a
                            qualquer momento. Em caso de objetivos comerciais, os lucros obtidos com o licenciamento serão
                            direcionados ao apoio de projetos voltados à maior acessibilidade para a população, incluindo a
                            comunidade de intérpretes de libras. Nosso compromisso é com a inclusão e a proteção dos seus dados.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex justify-center"><img src={imageProtection} style={{ height: "325px" }} alt="Protection Imgs" /></div>
                    </div>
                </section>
                <div className="flex justify-center mt-16">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-8 rounded-xl text-2xl font-medium">Dar uma
                        mão</button>
                </div>
            </main>
        </div>
    );
}

export default App;

