const {
	WAConnection,
    MessageType,
    Presence,
    ReconnectMode,
    Mimetype,
    GroupSettingChange
	} = require("@adiwajshing/baileys")
const fs = require('fs')
const moment = require("moment-timezone")
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { getBuffer, banner, start, success } = require('./lib/functions')
const { sleep } = require('./lib/offline')
const { color } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const creator = '6285163999446'
run = process.uptime() 
runtimee = `${kyun(run)}`
prefix = "𝐌𝐮𝐥𝐭𝐢"
banChats = false
memek =`
YT: https://youtube.com/zoexavier

Github: Rexha-Kenzz

IG: Ga Ada`
require('./NaisaZidan.js')
nocache('./NaisaZidan.js', module => console.log(`${module} is now updated!`))
require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))
console.log(color('ZoeDev'))
sleep(4000)
console.log(color('Bukan untuk dijual kntl Anak JB Ganteng'))

const starts = async (client = new WAConnection()) => {
    client.autoReconnect = ReconnectMode.onConnectionLost
    client.logger.level = 'warn'
    client.version = [2, 2143, 3]
    client.browserDescription = ['ZoeDev', 'EDGE', '94.0.992.47'] 
    client.on('qr', () => {
        console.log(color('[','white'), color('�?','red'), color(']','white'), color(' Scan whatsapp'))
    })

    fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
    client.on('connecting', () => {
        start('2', 'Connecting...')
    })
    client.on('open', () => {
        success('2', 'Connected')
    })
    client.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    client.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        })
    await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
                    		 client.on('group-participants-update', async (anu) => {
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
			try {
		ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	} catch {
		ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	let buff = await getBuffer(ppimg)
    const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${anu.participants[0].split('@')[0]} add`,
			"groupName": `${anu.participants[0].split('@')[0]} add`,
            "caption": `${anu.participants[0].split('@')[0]} add`,
            'jpegThumbnail': buff
		}
	}
}
    const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
    kma = gam1
    mhan = await client.prepareMessage(id, kma, MessageType.image)
    const buttonMessages = {
    imageMessage: mhan.message.imageMessage,
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 4
    }
    client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
				num = anu.participants[0]
				teks = `Halo @${num.split('@')[0]}\nSelamat datang di group\n *${mdata.subject}*\nSemoga Lu Kagak Betah Masuk Gc Disini`
				sendButImage(mdata.id, teks, "Welcome Message", buff,
				[
			{buttonId:` `,
			buttonText:{displayText:'Oke\n\n\n\n\n\n lah kok mantan gw masuk gw blm muupp on juga dahlah'},
			type:1
			}
			],{quoted:finv, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
			try {
		ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	} catch {
		ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	let buff = await getBuffer(ppimg)
    const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${anu.participants[0].split('@')[0]} Leave`,
			"groupName": `${anu.participants[0].split('@')[0]} Leave`,
            "caption": `${anu.participants[0].split('@')[0]} Leave`, 
            'jpegThumbnail': buff
		}
	}
}
    const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
    kma = gam1
    mhan = await client.prepareMessage(id, kma, MessageType.image)
    const buttonMessages = {
    imageMessage: mhan.message.imageMessage,
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 4
    }
    client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
				num = anu.participants[0]
				teks = `Sayonara @${num.split('@')[0]}`
				sendButImage(mdata.id, teks, "Leave Message", buff,
				[
			{buttonId:` `,
			buttonText:{displayText:'Byee\n\n\n\nByee Mantan Ku Tercinta Muacchh'},
			type:1
			}
			],{quoted:finv, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'demote') {
			try {
		ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	} catch {
		ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	let buff = await getBuffer(ppimg)
    const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${anu.participants[0].split('@')[0]} Di un admin`,
			"groupName": `${anu.participants[0].split('@')[0]} Di un admin`,
            "caption": `${anu.participants[0].split('@')[0]} Di un admin`, 
            'jpegThumbnail': buff
		}
	}
}
    const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
    kma = gam1
    mhan = await client.prepareMessage(id, kma, MessageType.image)
    const buttonMessages = {
    imageMessage: mhan.message.imageMessage,
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 4
    }
    client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
				num = anu.participants[0]
				teks = `DEMOTE DETECTED\n@${num.split('@')[0]}ðŸ‘‹`
				sendButImage(mdata.id, teks, "Demote Message", buff,
				[
			{buttonId:` `,
			buttonText:{displayText:'Byee'},
			type:1
			}
			],{quoted:finv, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			try {
		ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	} catch {
		ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	let buff = await getBuffer(ppimg)
    const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${anu.participants[0].split('@')[0]} Jadi admin`,
			"groupName": `${anu.participants[0].split('@')[0]} Jadi admin`,
            "caption": `${anu.participants[0].split('@')[0]} Jadi admin`, 
            'jpegThumbnail': buff
		}
	}
}
    const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
    kma = gam1
    mhan = await client.prepareMessage(id, kma, MessageType.image)
    const buttonMessages = {
    imageMessage: mhan.message.imageMessage,
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 4
    }
    client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
				num = anu.participants[0]
				teks = `PROMOTE DETECTED\n@${num.split('@')[0]}ðŸ¥³`
				sendButImage(mdata.id, teks, "Promote Message", buff,
				[
			{buttonId:` `,
			buttonText:{displayText:'Selamat'},
			type:1
			}
			],{quoted:finv, contextInfo: {"mentionedJid": [num]}})
			} 
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
    client.on('chat-update', async (message) => {
        require('./NaisaZidan.js')(client, message)
    })
  // client.sendMessage(`${creator}@s.whatsapp.net`, `Bot by RANZ BOTZ`, MessageType.text)
  //  client.sendMessage(`${creator}@s.whatsapp.net`, `${memek}`, MessageType.text)
}
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()



