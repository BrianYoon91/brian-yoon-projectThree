const DisplayExcuses = (props) => {

    return (
        <section>
            {
                props.excuses.length === 0? (
                    <h2>⏱HURRY YOU NEED AN EXCUSE BECAUSE YOU ARE A HORRIBLE LIAR AND PEOPLE WILL KNOW BECAUSE OF THE NERVOUS SWEATS UNDER YOUR ARM👀</h2>
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

                        <p> "I solemnly swear I am up to no good 📔" </p>
                    </div>
                )
            }
        </section>
    )
} 

export default DisplayExcuses;