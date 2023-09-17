import { Vortex } from 'react-loader-spinner'

export const Loader = () => {
    return (<Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />)
}