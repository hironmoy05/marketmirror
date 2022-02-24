import {Dimensions, useEffect} from 'react-native';

export default useDimensions = () => {
    const [screenInfo, setScreenInfo] = useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange = (result) => {
            setScreenInfo(result.screen)
        }

        Dimensions.addEventListener('change', onChange)

    },[])

    return {
        ...screenInfo,
        isPortrait: screenInfo.height > screenInfo.width,
    }
}