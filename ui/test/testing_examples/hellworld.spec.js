import React from 'react';
import TestUtil from 'react-addons-test-utils';
import HelloWorld from 'src/testing_examples/components/helloworld';

describe('HelloWorld', () => {
    it('renders a div', () => {
        const shallowRenderer = TestUtil.createRenderer();
        shallowRenderer.render(<HelloWorld />);
        const component = shallowRenderer.getRenderOutput();
        expect(component.type).to.equal('div');
    });
});
