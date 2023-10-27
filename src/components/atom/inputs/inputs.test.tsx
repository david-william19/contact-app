import { expect, test } from 'vitest'
import {render, screen} from '@testing-library/react';
import Input from '.';

test("render input", () => {
    it("should render input with placeholder", () => {
        render(<Input type='text' placeholder='testing' />)
        expect(screen.findByPlaceholderText(/testing/i)).toBeTruthy();
    });

    it("should render input with onChange", () => {
        render(<Input type='text' placeholder='testing' onChange={() => {}} />)
        expect(screen.findByPlaceholderText(/testing/i)).toBeTruthy();
    });
})