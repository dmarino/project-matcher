import React, {Component} from 'react';

const TAG_COLOR_TYPES = ['tag badge badge-danger', 'tag badge badge-info', 'tag badge badge-success'];

class Tags extends Component {
    render() {
        return (
            <div>
                {this.generateTags()}
            </div>
        );
    }

    generateTags() {
        const tagsElementArray = [];
        const tags = this.props.tags;

        if (this.props.tags.length === 0) {
            return;
        }

        for (let i = 0; i < TAG_COLOR_TYPES.length && i < tags.length; i++) {
            tagsElementArray.push(this.getTagOfType(tags[i], i));
        }
        return tagsElementArray;
    }

    getTagOfType(tagName, key) {
        switch (this.props.type) {
            case 'removable':
                return (
                    <span className="text-muted" key={key}>
                        {this.props.message}
                        <span className={TAG_COLOR_TYPES[key]} onClick={() => this.props.removeTag(tagName)}>
                            <span className="fa fa-close icon-margin"/>
                            {tagName}
                        </span>
                    </span>
                );
            case 'regular':
            default:
                return (
                    <span className="text-muted" key={key}>
                        {this.props.message}
                        <span className={TAG_COLOR_TYPES[key]}>{tagName}</span>
                    </span>
                );
        }
    }
}

export default Tags;
