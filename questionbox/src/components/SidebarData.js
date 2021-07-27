import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import QuestionAnswerTwoToneIcon from '@material-ui/icons/QuestionAnswerTwoTone'
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
export const SidebarData = [
  {
    title: 'Profile',
    icon: <AccountBoxIcon fontSize='large' />,
    link: '/home'
  },
  {
    title: 'Home',
    icon: <HomeIcon fontSize='large' />,
    link: '/home'
  },

  {
    title: 'Questions',
    icon: <QuestionAnswerTwoToneIcon fontSize='large' />,
    link: '/home'
  },

  {
    title: 'Tags',
    icon: <LabelImportantTwoToneIcon fontSize='large' />,
    link: '/home'
  }

]
