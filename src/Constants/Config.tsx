
type Config = {
    data_source: string | undefined,
}

function GetConfig(): Config {

    return {
        data_source: process.env.REACT_APP_SOURCE_DATA
    }
}

export default GetConfig