import {describe, test, expect, beforeEach} from "vitest";
import TableItem from "../../../src/components/TableItem.vue";
import {mount} from "@vue/test-utils";
import {createPinia, setActivePinia} from "pinia";

describe("TableItem", () => {

    beforeEach(() => {
        const pinia = createPinia();
        setActivePinia(pinia);
    })

    test("renders tableItem", async () => {
        const getTables = [
            {
                id: 1,
                number: 1,
                isOccupied: false,
                token: "12345678",
            },
            {
                id: 2,
                number: 2,
                isOccupied: true,
                token: "87654321",
            }
        ];
        const loading = true

        const wrapper = mount(TableItem, {
            props: {
                getTables,
                loading
            }
        })

        const tableItem = wrapper.findAll('div[data-test="tableItem"]')

        expect(tableItem[0].text()).toBe('Стол №1');
        expect(tableItem[1].text()).toBe('Стол №2');
    })

    test("renders tableItem server no work", async () => {
        const getTables = [];
        const loading = false

        const wrapper = mount(TableItem, {
            props: {
                getTables,
                loading
            }
        })

        const tableItem = wrapper.find('div[data-test="tableItemServerNoWork"]')

        expect(tableItem.text()).toBe('Сервер не работает');
    })
})