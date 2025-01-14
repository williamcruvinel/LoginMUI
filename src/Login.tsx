import { Facebook, Google, Lock} from "@mui/icons-material"
import { Box, Button, Checkbox, FormControl, FormControlLabel, Link, TextField, Typography } from "@mui/material"

const Login = () => {
  return (
    <Box 
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        bgcolor:"#9c27b0",
        width:"40px",
        height: "36px",
        borderRadius: "50%"
      }}>
        <Lock sx={{
          color:"#fff"
        }}/>
      </Box>

      <Typography 
        variant="h4" 
        align="center"
      > <strong>Login</strong> </Typography>
      <Box
        component="form"
         display="flex"
         flexDirection="column"
         maxWidth="400px"
         width="100%"
         gap={2}
         mt={5}
      >
        <FormControl>
          <TextField
            type="email"
            placeholder="e-mail"
            variant="outlined"
            required
          />
        </FormControl>

        <TextField
          type="password"
          placeholder="******"
          variant="outlined"
          required
        />

        <FormControlLabel
          control={<Checkbox value="remember"
          color="primary" required />}
          label="Lembrar senha"
        />
        <Button type="submit" 
          onClick= {() => alert("Entrar")}
          variant="contained"
        > Entrar </Button>
      </Box>

      <Box
        width="100%"
        maxWidth="400px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="" variant="body2">Esqueci minha senha</Link>
        <Link href="" variant="body2">Não tem conta? <br/>Cadastre-se</Link>
      </Box>

      <Box
        mt={5}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <Button 
          variant="outlined"
          startIcon={<Google/>}
        >Entrar com Google</Button>

        <Button 
          variant="outlined"
          startIcon={<Facebook/>}
        >Entrar com Facebook</Button>
        
      </Box>
    </Box>
  )
}

export default Login
