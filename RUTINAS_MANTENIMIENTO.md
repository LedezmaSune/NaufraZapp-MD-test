# 🧹 Rutinas de Mantenimiento del Bot (Kitsune-MD)

El bot cuenta con rutinas automáticas programadas internamente para gestionar el almacenamiento y evitar que el disco duro se sature con archivos basura y sesiones caducadas. A continuación se detallan las 4 herramientas principales de limpieza que se ejecutan en segundo plano en `main.js`:

## 1. Limpieza de Archivos Temporales (`clearTmp`)
- **Frecuencia:** Cada 3 minutos (180,000 ms).
- **Función:** Elimina todos los archivos multimedia (audios, imágenes, videos, stickers) que se guardan temporalmente en la carpeta `tmp` mientras el bot los procesa o los convierte. 
- **¿Por qué es necesario?:** Sin esta función, crear cientos de stickers o procesar audios llenaría el disco duro con los archivos base descargados.

## 2. Purga de Sesiones de WhatsApp (`purgeSession`)
- **Frecuencia:** Cada 1 hora.
- **Función:** Revisa la carpeta principal de conexión (`NaufraBotSession`) y elimina los archivos de claves pre-compartidas (`pre-key-*.json`) antiguos.
- **¿Por qué es necesario?:** La librería de WhatsApp (`@whiskeysockets/baileys`) utiliza una encriptación robusta que genera nuevas llaves de cifrado por cada mensaje nuevo o conexión. Estos archivos no son necesarios a largo plazo y borrarlos acelera la reconexión y reduce drásticamente el peso de la carpeta.

## 3. Purga de Sesiones de Sub-Bots (`purgeSessionSB`)
- **Frecuencia:** Cada 1 hora.
- **Función:** Realiza exactamente la misma tarea que `purgeSession`, pero aplicada a la carpeta recursiva `BotsWhatsAppOFC`, donde se guardan las sesiones de todos los usuarios que han creado un Sub-bot con el comando `#serbot`.
- **¿Por qué es necesario?:** Los sub-bots consumen el mismo espacio (o más) que el bot principal en cuanto a archivos de sesión. Esto mantiene el servidor libre de llaves viejas de cientos de usuarios distintos.

## 4. Purga de Archivos Antiguos (`purgeOldFiles`)
- **Frecuencia:** Cada 3 minutos (180,000 ms).
- **Función:** Escanea la carpeta `NaufraBotSession` y `BotsWhatsAppOFC`. Cualquier archivo (que no sea el esencial `creds.json`) cuya fecha de modificación supere **1 hora** de antigüedad es eliminado instantáneamente.
- **¿Por qué es necesario?:** Funciona como un sistema de recolección de basura definitivo, asegurando que si algún archivo no fue detectado por las rutinas 2 y 3, no permanezca ocupando espacio inútilmente.

---

> [!NOTE] 
> Cada vez que alguna de estas rutinas termina su ejecución, verás en la consola el recuadro verde con el texto:
> **✅ Archivo no necesario eliminado.**
> Esto es señal de que el bot está sano y tu disco duro seguro.
