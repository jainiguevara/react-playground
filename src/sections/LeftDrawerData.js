import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { MoveToInbox, Drafts, Star, Send, Mail, Delete, Report } from '@material-ui/icons'


const LeftDrawerData = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MoveToInbox />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Star />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Send />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Drafts />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
)

export default LeftDrawerData
