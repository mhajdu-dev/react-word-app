import React from 'react'

const SearchForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const inputWord = e.target.elements.inputWord.value
        if (!inputWord) return
        console.log(inputWord);
    }

    return (
        <section>
            <h1>Word App in React</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='inputWord'
                    placeholder='word'
                />
                <button type='submit' >submit</button>
            </form>
        </section>
    )
}

export default SearchForm