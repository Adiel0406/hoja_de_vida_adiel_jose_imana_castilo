document.addEventListener('DOMContentLoaded', () => {

    /* ========================================================
       1. FUNCIONALIDAD: MODO CLARO / OSCURO (CON LOCALSTORAGE)
       ======================================================== */
    const btnModo = document.getElementById('btn-modo');
    const textoModo = document.getElementById('texto-modo');
    
    // Verificar si el usuario ya tenía una preferencia guardada
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'oscuro') {
        document.body.classList.add('modo-oscuro');
        textoModo.textContent = '☀️ Modo claro';
    }

    btnModo.addEventListener('click', () => {
        document.body.classList.toggle('modo-oscuro');
        
        if (document.body.classList.contains('modo-oscuro')) {
            textoModo.textContent = '☀️ Modo claro';
            localStorage.setItem('tema', 'oscuro');
        } else {
            textoModo.textContent = '🌙 Modo oscuro';
            localStorage.setItem('tema', 'claro');
        }
    });

    /* ========================================================
       2. FUNCIONALIDAD: VALIDACIÓN DE FORMULARIO DE CONTACTO
       ======================================================== */
    const formulario = document.getElementById('form-contacto');
    const mensajeRespuesta = document.getElementById('mensaje-formulario');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar envío por defecto para validar
        
        let esValido = true;
        limpiarErrores();

        // Referencias a los campos
        const nombre = document.getElementById('nombre');
        const correo = document.getElementById('correo');
        const telefono = document.getElementById('telefono');
        const motivo = document.getElementById('motivo');
        const mensaje = document.getElementById('mensaje');
        const aceptacion = document.getElementById('aceptacion');

        // Validación Nombre (mínimo 3 letras)
        if (nombre.value.trim().length < 3) {
            mostrarError('nombre', 'El nombre debe tener al menos 3 caracteres.');
            esValido = false;
        }

        // Validación Correo Electronico (Formato correcto)
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(correo.value.trim())) {
            mostrarError('correo', 'Por favor, ingresa un correo electrónico válido.');
            esValido = false;
        }

        // Validación Teléfono (Mínimo 7 dígitos/formato básico)
        const regexTel = /^[+]?[0-9 ]{7,20}$/;
        if (!regexTel.test(telefono.value.trim())) {
            mostrarError('telefono', 'Ingresa un teléfono válido (ej. +591 67167255).');
            esValido = false;
        }

        // Validación Motivo
        if (motivo.value === '') {
            mostrarError('motivo', 'Por favor selecciona un motivo de contacto.');
            esValido = false;
        }

        // Validación Mensaje (Mínimo 10 caracteres)
        if (mensaje.value.trim().length < 10) {
            mostrarError('mensaje', 'El mensaje debe contener al menos 10 caracteres.');
            esValido = false;
        }

        // Validación Checkbox Términos
        if (!aceptacion.checked) {
            mostrarError('aceptacion', 'Debes aceptar el procesamiento de datos.');
            esValido = false;
        }

        // Si la validación es exitosa
        if (esValido) {
            mensajeRespuesta.className = 'mensaje-respuesta exito';
            mensajeRespuesta.textContent = '¡Gracias! Tu mensaje ha sido enviado exitosamente.';
            mensajeRespuesta.style.display = 'block';

            formulario.reset();

            setTimeout(() => {
                mensajeRespuesta.style.display = 'none';
            }, 5000);
        }
    });

    // Función auxiliar para mostrar errores
    function mostrarError(campoId, mensaje) {
        const campo = document.getElementById(campoId);
        const errorSpan = document.getElementById(`error-${campoId}`);
        if (campo) campo.classList.add('campo-error');
        if (errorSpan) errorSpan.textContent = mensaje;
    }

    // Función auxiliar para limpiar errores previos
    function limpiarErrores() {
        const campos = formulario.querySelectorAll('input, textarea, select');
        campos.forEach(campo => campo.classList.remove('campo-error'));

        const errores = formulario.querySelectorAll('.error-mensaje');
        errores.forEach(span => span.textContent = '');

        mensajeRespuesta.style.display = 'none';
    }
});