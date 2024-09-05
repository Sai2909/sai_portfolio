import React, { useEffect, useState } from 'react';

const content = `Lorem ipsum dolor sit amet, novum menandri adversarium ad vim, ad his persius nostrud conclusionemque. Lorem ipsum dolor sit amet, novum menandri adversarium ad vim, ad his persius nostrud conclusionemque. Lorem ipsum dolor sit amet, novum menandri adversarium ad vim, ad his persius nostrud conclusionemque.`;

export default function LoadMoreCard() {
    const [text, setText] = useState(``);
    const [isReadMore, setIsReadMore] = useState(false);
    const [showReadMore, setShowReadMore] = useState(true);

    const readLess = () => {
        const words = content.split(' ');
        if (words.length > 30) {
            const shortenedText = words.slice(0, 30).join(' ') + '...';
            setText(shortenedText);
        } else {
            setText(content);
            setShowReadMore(false);
        }
    };

    useEffect(() => {
        readLess();
    }, []);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
        if (isReadMore) {
            readLess();
        } else {
            setText(content);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-sm p-4 bg-white shadow-lg rounded-lg m-4">
                <div className="mb-4">
                    <p className="text-gray-700">{text}</p>
                </div>
                {showReadMore && (
                    <button
                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                        onClick={toggleReadMore}
                    >
                        {isReadMore ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </div>
        </div>
    );
}
