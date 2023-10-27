import { expect, test } from 'vitest'
import {render, screen} from '@testing-library/react';
import Button from '.';

test("render button", () => {
    it("should render button", () => {
        render(<Button color="primary" variant="filled" />)
        expect(screen.getByText(/Button/i)).toBeTruthy();
    });
})