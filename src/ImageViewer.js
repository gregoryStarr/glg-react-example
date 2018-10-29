import React, {useState} from 'react';
import {Button, Image, Segment} from "semantic-ui-react";
const logos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTvcKoXY3_cegGfV8hxdwXWKnExowqPAcKWaiA01ktgF8AeRLa3g",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjeQ6lCy3GYdmYdd4hzY9kz3aRskSBRWNc4oQbSNfbBhihhFf1g",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKrN7Nt9JsItkvwr4zlkzIvSVtPbkcOuokOdP-w7EPIRHa6eFAg"
];
const ImageViewer = (props) => {
    let [logoIndex, setIndex] = useState(0);
    return (
        <Segment.Group>
            <Segment basic>
                <Image src={logos[logoIndex]} size="medium" circular avatar />
            </Segment>
            <Segment>
                <h3>Current Image Index</h3>
                <h2>{logoIndex}</h2>
                <p>Click the button to change image.</p>
                {
                    <Button
                        onClick={() => {
                            setIndex(logoIndex < logos.length - 1 ? logoIndex + 1 : 0);
                        }}
                    >
                        Change Image
                    </Button>
                }
            </Segment>
        </Segment.Group>
    );
};

export default ImageViewer;