import React, { Component } from 'react';
import Form from './Form';
import Tarefas from './Tarefas';

import './Main.css';

export default class Main extends Component {
    state = {
      novaTarefa: '',
      tarefas: [],
      index: -1,
    };

    componentDidMount(){
      const tarefas = JSON.parse(localStorage.getItem('tarefas'));
      if(!tarefas) return;

      this.setState({ tarefas });
    }

    componentDidUpdate(prevProps, prevState){
      const { tarefas } = this.state;

      if(tarefas === prevState.tarefas) return;

      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { tarefas, index } = this.state;
      let { novaTarefa } = this.state;
      novaTarefa = novaTarefa.trim();

      if(tarefas.indexOf(novaTarefa) !== -1) return; //se a novaTarefa ja existir no array de tarefas então o index não vai ser -1 pq o index -1 É quando não existe

      const novastarefas = [...tarefas];

      if(index === -1){
        this.setState({
          tarefas: [...novastarefas, novaTarefa],
          novaTarefa: '',
        });
      }else{
        const novasTarefas = [...tarefas];
        novasTarefas[index] = novaTarefa;

        this.setState({
          tarefas: [...novasTarefas],
          index: -1,
          novaTarefa: '',
        });
      }
    }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    })
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    })
  }

  handleDone = (e, index) => {
    //novasTarefas.style.className = 'riscado';
    this.setState({
        tarefas: this.state.tarefas.map(tarefa => ({
            ...tarefa,
        isActive: e.target.index === tarefa.index 
        }))
    })
  }


  render(){
    const { novaTarefa, tarefas } = this.state;

    return(
      <div className='main'>
          <h1 className='concert-one-regular'>Lista de tarefas</h1>
          <Form
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            novaTarefa={novaTarefa}
          />
          <Tarefas
          tarefas={tarefas}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleDone={this.handleDone}
          />

      </div>
    );
  }
}

//onChange chama funcao chamada handleChange, onSubmit chama funçao handleSubmit por convenção isso acontece
//pra usar javascript dentro jsx deve haver chaves
