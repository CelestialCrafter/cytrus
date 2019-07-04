const config = {
  'owners': ['395990735934980097'],
  'managers': ['437698252381487104', 
'339903300994596884'],
  'admins': [],
  'developers': [],
  'mods': [],
  'support': [],
  'helpers': [],
  
  'blacklisted': ['251213730577252354', '439183092037713930'],
  'globalBan': require('./data/GlobalBans'),
  'token': 'NTI2n0-t.r_e-a1-t0-k_e.n_d0.nt-chang3',
  
  'defaultSettings' : {
    'prefix': 'cy.',
    'modLogChannel': 'log',
    'modRole': 'Moderator',
    'adminRole': 'Administrator',
    'muteRole': 'CytrusMute',
    'noPermissionNotice': 'true',
    'welcomeChannel': 'general',
    'welcomeMessage': 'Welcome to the server {{ping}}!',
    'welcomeEnabled': 'true',
    'logMessageUpdates': 'true',
    'logEmojiUpdates': 'true',
    'logMemberUpdates': 'true',
    'starboardChannel': 'starboard'
  },

  permLevels: [
    { level: 0,
      name: 'Blacklisted',
     
      check: () => true
    },
    
    { level: 1,
      name: 'User',
     
      check: (message) => !config.blacklisted.includes(message.author.id) || !config.globalBan.includes(message.author.id)
    },

    { level: 2,
      name: 'Moderator',

      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === client.getSettings(message.guild.id).modRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id) || message.member.hasPermission('MANAGE_MESSAGES')) return true;
        } catch (e) {
          return false;
        }
      }
    },

    { level: 3,
      name: 'Administrator',
     
      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === client.getSettings(message.guild.id).adminRole.toLowerCase())
          if (message.member.roles.has(adminRole.id) || message.member.hasPermission('ADMINISTRATOR')) return true;
        } catch (e) {
          return false;
        }
      }
    },
    
    { level: 4,
      name: 'Server Owner', 
     
      check: (message) => message.channel.type === 'text' ? (message.guild.ownerID === message.author.id ? true : false) : false
    },
    
    { 
      level: 5,
      name: 'Bot Helper',
      
      check: (message) => config.helpers.includes(message.author.id)
    },
    
    { 
      level: 6,
      name: 'Bot Support',
      
      check: (message) => config.support.includes(message.author.id)
    },

    { 
      level: 7,
      name: 'Bot Moderator',
      
      check: (message) => config.mods.includes(message.author.id)
    },
    
    { 
      level: 8,
      name: 'Bot Developer',
      
      check: (message) => config.developers.includes(message.author.id)
    },
    
    {
      level: 9,
      name: 'Bot Admin',
     
      check: (message) => config.admins.includes(message.author.id)
    },
    
    {
      level: 10,
      name: 'Bot Manager',
     
      check: (message) => config.admins.includes(message.author.id)
    },

    { level: 11,
      name: 'Bot Owner',
     
      check: (message) => config.owners.includes(message.author.id)
    }
  ]
};

module.exports = config;
