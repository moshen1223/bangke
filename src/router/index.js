import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HomePage = (resolve) => {
  import('components/home/home-page').then((module) => {
    resolve(module)
  })
}

const UserCenter = (resolve) => {
  import('components/user/user-center').then((module) => {
    resolve(module)
  })
}

const AddUserInfo = (resolve) => {
  import('components/user/add-userInfo').then((module) => {
    resolve(module)
  })
}

const Rule = (resolve) => {
  import('components/expressage/rule').then((module) => {
    resolve(module)
  })
}

const Receive = (resolve) => {
  import('components/expressage/receive').then((module) => {
    resolve(module)
  })
}

const ReceiveList = (resolve) => {
  import('components/expressage/receive-list').then((module) => {
    resolve(module)
  })
}

const ReceiveDetail = (resolve) => {
  import('components/expressage/receive-detail').then((module) => {
    resolve(module)
  })
}

const MyHelp = (resolve) => {
  import('components/mutualhelp/my-help').then((module) => {
    resolve(module)
  })
}
const MyHelpDetail = (resolve) => {
  import('components/mutualhelp/my-help-detail').then((module) => {
    resolve(module)
  })
}
const PublishHelp = (resolve) => {
  import('components/mutualhelp/publish-help').then((module) => {
    resolve(module)
  })
}

const HelpList = (resolve) => {
  import('components/mutualhelp/help-list').then((module) => {
    resolve(module)
  })
}

const HelpDetail = (resolve) => {
  import('components/mutualhelp/help-detail').then((module) => {
    resolve(module)
  })
}

const AddressManage = (resolve) => {
  import('components/expressage/address-manage').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [{
      path: '/user',
      component: UserCenter
    },{
      path: '/home',
      component: HomePage
    },{
      path: '/my-help',
      component: MyHelp,
      children:[
        {
          path: ':id',
          component: MyHelpDetail
        }
      ]
    },{
      path: '/help-list',
      component: HelpList,
      children:[
        {
          path: ':id',
          component: HelpDetail
        }
      ]
    },{
      path: '/publish-help',
      component: PublishHelp
    },{
      path: '/address-manage',
      component: AddressManage
    },{
      path: '/addUserInfo',
      component: AddUserInfo
    },{
      path: '/rule',
      component: Rule
    },{
      path: '/receive',
      component: Receive
    },{
      path: '/receive-list',
      component: ReceiveList,
      children:[
        {
          path:':id',
          component: ReceiveDetail
        }
      ]
    }
  ]
})
