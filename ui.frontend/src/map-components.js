import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/CheckboxVue/CheckBox'
import { withComponentMappingContext, MapTo } from '@mavice/aem-vue-editable-components'

// Text Component Mapping
MapTo('vue/components/text')(Text)
MapTo('vue/components/page')(withComponentMappingContext(AppPage))
MapTo('vue/components/checkbox-vue')(CheckBox)
