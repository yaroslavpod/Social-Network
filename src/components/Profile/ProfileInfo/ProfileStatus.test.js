import React from "react";
import {create} from "react-test-renderer";
import {act} from "@testing-library/react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

describe("Profile status component", () => {

    test("it shows the expected text when clicked", () => {
        let component;
        act(()=>{
            component = create(<ProfileStatusWithHooks status = "Hell0"/>)
        })
        const instance = component.root;
        let status =instance._fiber.pendingProps.status;
        expect(status).toBe("Hell0");
    });
    test("span shuold be visible", () => {
        let component;
        act(()=>{
            component = create(<ProfileStatusWithHooks status = "Hell0"/>)
        })
        const instance = component.root;
        const span = instance.findByType("span")
        expect(span).not.toBeNull();
    });
    test("after creation input shouldn't be visible", () => {
        let component;
        act(()=>{
            component = create(<ProfileStatusWithHooks status = "Hell0"/>)
        })
        const instance = component.root;
        expect(()=>{
            const input = instance.findByType("input")
        }).toThrow();
    });
    test("Status should be from props", () => {
        let component;
        act(()=>{
            component = create(<ProfileStatusWithHooks status = "Hell0"/>)
        })
        const instance = component.root;
        const span = instance.findByType("span")
        expect(span.children[0]).toBe("Hell0");
    });
    test("In edit mode should be displayed input instead of span", () => {
        let component;
        act(()=>{
            component = create(<ProfileStatusWithHooks status = "Hell0"/>)
        })
        const instance = component.root;
        const span = instance.findByType("span");
        act(()=>{
            span.props.onClick()
        })
        const input = instance.findByType("input")
        expect(input.props.value).toBe("Hell0");
    });
    test("callback should be called", () => {
        let component;
        const mockCallback = jest.fn();
        act(()=>{
            component = create(<ProfileStatusWithHooks status = "Hell0" updateUserStatus ={mockCallback}/>)
        })
        const instance = component.root;
        const span = instance.findByType("span");
        act(()=>{
            span.props.onClick()
        })
        const input = instance.findByType("input")
        input.props.onBlur();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});