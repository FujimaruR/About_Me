const Terminal = () => {

    return (

        <section className="p-5 border-top">
            <h1 className="display-4 text-white"><span className="text-primary">Curriculum</span></h1>

            <div className="terminal mt-5 p-3 bg-black text-success rounded" style={{ fontFamily: 'Courier New, monospace' }}>
                <span className="me-2">CMD</span>
                <div className="d-flex align-items-center">
                    <span className="me-2">C:\Users&gt;</span>
                    <input
                        id="cmd-input"
                        type="text"
                        className="bg-black border-0 text-success flex-grow-1"
                        style={{ outline: 'none' }}
                        placeholder="Escribe 'curriculum' y presiona Enter"
                        onKeyDown={(e) => {
                            const respuesta = document.getElementById('cmd-response');
                            const pdfFrame = document.getElementById('curriculum-frame');
                            if (e.key === 'Enter') {
                                if (e.target.value.toLowerCase() === 'curriculum') {
                                    respuesta.innerText = 'Abriendo curriculum.pdf...';
                                    pdfFrame.style.display = 'block';
                                } else {
                                    respuesta.innerText = `'${e.target.value}' no se reconoce como un comando interno o externo.`;
                                    pdfFrame.style.display = 'none';
                                }
                                e.target.value = '';
                            }
                        }}
                    />
                </div>
                <div id="cmd-response" className="mt-3"></div>
            </div>

            <div id="curriculum-frame" className="mt-4" style={{ display: 'none' }}>
                <iframe src="/mi-curriculum.pdf" width="100%" height="1000px" style={{ border: '2px solid #0d6efd' }}></iframe>
            </div>
        </section>

    );
};

export default Terminal;