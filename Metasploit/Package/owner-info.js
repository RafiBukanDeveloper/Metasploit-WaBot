const baileys = require("@Rafi_Project/baileys");

let pan = `> Nih Nomor Owner Nya Ngab`;

const Rafiganteng = {
    command: ['owner', 'own', 'pemilik'],
    help: ['owner', 'own', 'pemilik'],
    tags: ['info'],
    async code(m, {
        conn
    }) {
        async function image(url) {
            const {
                imageMessage
            } = await baileys.generateWAMessageContent({
                image: {
                    url
                }
            }, {
                upload: conn.waUploadToServer
            });
            return imageMessage;
        }

        let msg = baileys.generateWAMessageFromContent(
            m.chat, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: pan
                            },
                            carouselMessage: {
                                cards: await Promise.all(setting.nomorowner.map(async (a, i) => ({
                                    header: baileys.proto.Message.InteractiveMessage.Header.create({
                                        ...(await baileys.prepareWAMessageMedia({
                                            image: {
                                                url: setting.tampilan
                                            }
                                        }, {
                                            upload: conn.waUploadToServer
                                        })),
                                        title: '',
                                        gifPlayback: true,
                                        subtitle: setting.namaowner,
                                        hasMediaAttachment: false
                                    }),
                                    body: {
                                        text: `> 👤 Owner: ${i + 1},
> ⚠️Jangan Spam Chat/Telpon,
> ⚠️Jangan Video Call,`
                                    },
                                    nativeFlowMessage: {
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson: JSON.stringify({
                                                display_text: `👤 Chat Owner ( ${setting.namaowner} )`,
                                                url: `https://wa.me/${setting.nomorowner}`,
                                                merchant_url: `https://wa.me/${setting.nomorowner}`
                                            })
                                        }]
                                    }
                                }))),
                                messageVersion: 1
                            }
                        }
                    }
                }
            }, {
                quoted: m
            }
        );

        await conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
    }
}

module.exports = Rafiganteng;
