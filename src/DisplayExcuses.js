const DisplayExcuses = (props) => {
    console.log(props.excuses.length);

    return (
        <section>
            {
                props.excuses.length === 0? (
                    <h2>HURRY YOU NEED AN EXCUSE BECAUSE YOU ARE A HORRIBLE LIAR AND PEOPLE WILL KNOW BECAUSE OF THE NERVOUS SWEATS UNDER YOUR ARM</h2>
                ): (

                    <div className="excusesContainer">
                        {
                            props.excuses.map((lie)=>{
                                return (
                                    <div className="excuses" key={lie.id}>
                                        <h3>{lie.excuse}</h3>
                                    </div>
                                )
                            })

                        }
                    </div>
                )
            }
        </section>
    )
} 

export default DisplayExcuses;