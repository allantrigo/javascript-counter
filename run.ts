import { Count } from './Observer/Count'
import { CountCapital } from './Observer/CountCapital'
import { CountEvens } from './Observer/CountEvens'
import { Question } from './Question/Question'
import { Splitter } from './Subject/Splitter'

async function run() {
    let exit = false

    const splitter = new Splitter()
    const count = new Count()
    const countEvens = new CountEvens()
    const countCapital = new CountCapital()

    splitter.attach(count)
    splitter.attach(countEvens)
    splitter.attach(countCapital)

    while (!exit) {
        let sentence = await new Question().question("Insira a frase a ser contada: ")
        while (sentence.length) {
            splitter.split(sentence)
            switch (await new Question().question("Deseja Mudar a frase?\n 1 - Sim \n 2 - Sair \n")) {
                case "1":
                    sentence = ""
                    break
                default:
                    exit = true
                    sentence = ""
            }
        }
    }
}

run()
