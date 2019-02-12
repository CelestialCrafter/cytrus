const config = {
  'owners': ['493922020783030282', '314165962100310017'],
  'managers': [],
  'admins': ['463051744071516201'],
  'developers': ['476875063145005070'],
  'mods': [],
  'support': [],
  'helpers': ['339903300994596884', '277872422760349696'],
  
  'blacklisted': ['251213730577252354'],
  'globalBan': require('./GlobalBans'),
  'token': 'NTI2n0-t.r_e-a1-t0-k_e.n',
  'domain': 'https://dash.cytrus.ga',
  'callbackURL': 'https://dash.cytrus.ga',
  
  'defaultSettings' : {
    'prefix': 'cy.',
    'modLogChannel': 'log',
    'modRole': 'Moderator',
    'adminRole': 'Administrator',
    'muteRole': 'muted',
    'noPermissionNotice': 'true',
    'welcomeChannel': 'general',
    'welcomeMessage': 'Welcome to the server {{ping}}!',
    'welcomeEnabled': 'true',
    'logMessageEdits': 'true',
    'logMessageDeletions': 'true'
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
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },

    { level: 3,
      name: 'Administrator',
     
      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase());
          return (adminRole && message.member.roles.has(adminRole.id) || message.author.hasPermission('ADMINISTRATOR'));
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