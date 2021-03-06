import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import QuestionAnswerTwoToneIcon from '@material-ui/icons/QuestionAnswerTwoTone'
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export const SidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon fontSize='large' />,
    link: '/'
  },

  {
    title: 'Questions',
    icon: <QuestionAnswerTwoToneIcon fontSize='large' />,
    link: <Link to='/Profile'>tex</Link>
  },

  {
    title: 'Tags',
    icon: <LabelImportantTwoToneIcon fontSize='large' />,
    link: <Link to='/' />
  }

]
