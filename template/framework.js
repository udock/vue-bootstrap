'use strict'
import _ from 'lodash'
import Vue from 'vue'

const framework = Vue

framework.udock = (path) => _.get(framework.udock, path)

<%for(var define of defines) {%>
<%= define.code %><%}%>
framework.use({
  install (framework) {
    <%for(var install of installs) {%>
    <%= install.code %><%}%>
  }
})
