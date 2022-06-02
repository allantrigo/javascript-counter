import { Count } from "../Observer/Count"
import { CountCapital } from "../Observer/CountCapital"
import { CountEvens } from "../Observer/CountEvens"
import { Splitter } from "../Subject/Splitter"

const text = "O rato roeu a roupa do Rei de Roma."
const array = text.replace(RegExp("[.,;!?]*[1-9]*", "g"), "").split(" ")
const observer = new Count()

test("Count", () => {
  const count = new Count()
  expect(count.update(array)).toEqual(9)
})

test("Count evens", () => {
  const count = new CountEvens()
  expect(count.update(array)).toEqual(5)
})

test("Count words with capital letters", () => {
  const count = new CountCapital()
  expect(count.update(array)).toEqual(3)
})

describe("Subject", () => {
  it("attach", () => {
    const subject = new Splitter()
    subject.attach(observer)
    expect(subject.observers.length).toBe(1)
  })

  it("detach", () => {
    const subject = new Splitter()
    subject.attach(observer)
    expect(subject.observers.length).toBe(1)
    subject.detach(observer)
    expect(subject.observers.length).toBe(0)
  })
})